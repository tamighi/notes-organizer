import React from "react";
import ImageInput from "./ImageInput";

const ManuscriptProcessorPage = () => {
  const onChange = React.useCallback((e: { target: EventTarget }) => {
    console.log((e.target as HTMLInputElement).files);
  }, []);

  return (
    <div>
      <div className="flex gap-4">
        <div>The output</div>
        <ImageInput onChange={onChange} />
      </div>
    </div>
  );
};

export default ManuscriptProcessorPage;
