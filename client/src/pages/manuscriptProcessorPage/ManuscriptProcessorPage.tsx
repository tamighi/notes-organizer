import { manuscriptService } from "@/services/manuscriptService";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import ImageInput from "./ImageInput";

const ManuscriptProcessorPage = () => {
  const mutation = useMutation({
    mutationFn: manuscriptService.manuscriptToTranscript,
  });

  const onChange = React.useCallback(
    async (e: { target: EventTarget }) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      mutation.mutate(file);
    },
    [mutation],
  );

  return (
    <div>
      <div className="flex gap-4">
        <div>{mutation.data}</div>
        <ImageInput onChange={onChange} />
      </div>
    </div>
  );
};

export default ManuscriptProcessorPage;
