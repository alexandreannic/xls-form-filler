import {Button, Icon, IconButton, styled, useTheme} from '@mui/material'
import {useEffect, useMemo, useRef, useState} from 'react'
import {useXlsFormFillerContext} from '../XlsFormFiller.tsx'

const ImageContainer = styled('div')(({theme}) => ({
  mt: 1,
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  marginBottom: 1,
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: '100%',
  maxHeight: 200,
  objectFit: 'contain',
  borderRadius: theme.shape.borderRadius + 'px',
  mb: 1,
  display: 'flex',
  justifyContent: 'center',
}))

const Image = styled('img')(({theme}) => ({
  margin: 'auto',
  height: '100%',
  maxHeight: 200,
}))

const DeleteBtn = styled(IconButton)(({theme}) => ({
  position: 'absolute',
  top: 4,
  right: 4,
  backgroundColor: 'rgba(255,255,255,0.8)',
  '&:hover': {backgroundColor: 'white'},
}))

export const QuestionImage = ({value, onChange}: {
  value: string | File | undefined
  onChange: (val: string) => void
}) => {
  const ctx = useXlsFormFillerContext()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | undefined>()

  const fileUrl = useMemo(() => {
    if (typeof value === 'string') return value
    if (value instanceof File) return URL.createObjectURL(value)
    return undefined
  }, [value])

  useEffect(() => {
    setPreviewUrl(fileUrl)
    return () => {
      if (fileUrl?.startsWith('blob:')) URL.revokeObjectURL(fileUrl)
    }
  }, [fileUrl])

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      onChange(reader.result as string) // base64 string
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = () => {
    onChange('')
    setPreviewUrl(undefined)
    fileInputRef.current!.value = ''
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{display: 'none'}}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />

      <Button
        variant="contained"
        startIcon={<Icon>image</Icon>}
        onClick={() => fileInputRef.current?.click()}
      >
        {value ? ctx.labels.selectImage : ctx.labels.changeImage}
      </Button>

      {previewUrl && (
        <ImageContainer>
          <Image
            src={previewUrl}
            alt="Preview"
          />
          <DeleteBtn
            aria-label="delete"
            onClick={handleDelete}
            size="small"
          >
            <Icon fontSize="small">delete</Icon>
          </DeleteBtn>
        </ImageContainer>
      )}
    </>
  )
}
