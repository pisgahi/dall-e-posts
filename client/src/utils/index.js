import FileSaver from "file-saver"

import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomindex = Math.floor(Math.random() * surpriseMePrompts.length); 
  const getRandomPrompt = surpriseMePrompts[randomindex]

  if(getRandomPrompt === prompt){
    return getRandomPrompt(prompt)
  }

  return getRandomPrompt
}

export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
