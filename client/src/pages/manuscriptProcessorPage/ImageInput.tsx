export type ImageInputProps = React.HTMLAttributes<HTMLInputElement>;

const ImageInput = (props: ImageInputProps) => {
  return <input type="file" accept="image/*" multiple {...props} />;
};

export default ImageInput;
