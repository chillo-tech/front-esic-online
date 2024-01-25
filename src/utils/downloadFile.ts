const handleDownload = (
  fileUrl: string,
  filename: string,
  extension?: string
) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = extension ? `${filename}.${extension}` : filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export { handleDownload };
