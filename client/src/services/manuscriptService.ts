class ManuscriptService {
  public async manuscriptToTranscript(file: File) {
    return file.name;
    const res = await fetch("https://google.com", { method: "get" });

    return res.json();
  }
}

export const manuscriptService = new ManuscriptService();
