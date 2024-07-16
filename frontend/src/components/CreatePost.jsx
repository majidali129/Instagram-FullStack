import { useEffect, useRef, useState } from "react";
import Form from "../shared/Form";
import Button from "../shared/Button";
import { useModalContext } from "../shared/Modal";
import { BsCloudUpload } from "react-icons/bs";

const CreatePost = () => {
  const [userPost, setUserPost] = useState(null);
  const [caption, setCaption] = useState("");
  const {close} = useModalContext()
  const [submiting, setSubmiting] = useState(false)

  const [isUploaded, setIsUploaded] = useState(false);
  //   const [showCaption, setShowCaption] = useState(false);
  const uploaderRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null); // Reference for caption section

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserPost(file);
    setIsUploaded(true);
  };
  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ userPost, caption });
    setSubmiting(true)
    setTimeout(() => {
        close()
        setCaption("");
        setUserPost(null);
        setSubmiting(false)
    },3000)
  };

  //   const handleBack = () => {
  //     setIsUploaded(false);
  //     setShowCaption(false); // Reset caption state
  //     setCaption('')
  //   };

  //   const handleNext = () => {
  //     setShowCaption(true);
  //   };


  useEffect(() => {
    if (isUploaded && uploaderRef.current && imageRef.current) {
      const uploaderRect = uploaderRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      // Calculate animation styles for a smooth transition
      const animationStyles = {
        transform: `translateX(${uploaderRect.left - imageRect.left}px)`,
        opacity: 0
      };

      uploaderRef.current.style.transition =
        "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
      uploaderRef.current.style.transform = animationStyles.transform;
      uploaderRef.current.style.opacity = animationStyles.opacity;
    }
  }, [isUploaded]);

  return (
    <section className="bg-zinc-900 *:rounded rounded  min-h-96 w-[340px] md:w-[400px] top-3 relative">
      {/* Upload file */}
      <Form className="shadow-none" onSubmit={onSubmit}>
        <>
        <div
          ref={uploaderRef}
          className={`file-uploader ${isUploaded ? "hidden" : ""}`}
        >
          <header className="border-b  border-b-zinc-700 h-12 flex items-center justify-center">
            <h4>Create Post</h4>
          </header>
          <div className=" h-[calc((384px-48px)-50px)] w-full bg-inherit flex flex-col items-center justify-evenly">
            <span><BsCloudUpload className="w-20 h-20 opacity-50"/></span>
            <div className="flex gap-x-10 w-full overflow-hidden">
              <>
                <label
                  htmlFor="file-upload"
                  className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-500 w-full py-3 px-2 rounded-md cursor-pointer text-center"
                >
                  <i className="fa fa-cloud-upload"></i> Custom Upload
                </label>
                <input
                  id="file-upload"
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                />
              </>
            </div>
          </div>
        </div>

        {/* Image preview and caption section */}
        <div
          className={`image-preview-container py-5 px-2  space-y-3 ${
            isUploaded ? "" : "hidden"
          }`}
        >
          <div className="w-full  hidden items-center justify-between *:text-blue-400 px-3">
            {/* <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button> */}
          </div>
          <div ref={imageRef} className="image-preview">
            {userPost && (
              <img
                src={URL.createObjectURL(userPost)}
                alt="Uploaded preview"
                className="mb-4 max-h-60 rounded  mx-auto object-cover"
              />
            )}
          </div>
          {userPost && (
            <div ref={captionRef}>
              <textarea
                value={caption}
                onChange={handleCaptionChange}
                placeholder="Write your caption..."
                className="w-full rounded-sm bg-zinc-800 outline-none border-none mt-2 px-2 py-2"
              ></textarea>
            </div>
          )}
          {caption && (
            <div className="flex justify-end">
              <Button varient="primary" className="px-10 max-sm:w-full" disabled={submiting} type="submit">{submiting? 'Uploading...': 'Upload'}</Button>
            </div>
          )}
        </div>
        </>
      </Form>
    </section>
  );
};

export default CreatePost;
