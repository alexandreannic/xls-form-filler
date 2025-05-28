import {useState} from 'react'

export const useAttachments = () => {
  const [attachments, setAttachments] = useState<Record<string, File>>({})

  const save = (file: File) => {
    setAttachments(prev => ({...prev, [file.name]: file}))
  }

  const clearByName = (fileName: string) => {
    setAttachments(prev => {
      const copy = {...prev}
      delete copy[fileName]
      return copy
    })
  }

  const get = (fileName: string): File | undefined => {
    return attachments[fileName]
  }

  return {
    get,
    list: attachments,
    saveAttachment: save,
    clearAttachmentByName: clearByName,
  }
}