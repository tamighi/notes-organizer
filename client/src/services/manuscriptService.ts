class ManuscriptService {
  public async manuscriptToTranscript(file: File) {
    const formData = new FormData();
    formData.append(file.name, await file.text());

    const res = await fetch("http://localhost:3000/manuscript/transcript", {
      method: "post",
      body: formData,
    });

    return res.text();
  }
}

export const manuscriptService = new ManuscriptService();
