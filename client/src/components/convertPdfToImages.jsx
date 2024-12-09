import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';

export const convertPdfToImages = async (pdfUrl) => {
  const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;
  const images = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;
    images.push(canvas.toDataURL());
  }

  return images;
};
