import {alpha, Button, Icon, IconButton, styled} from '@mui/material'
import {useMemo, useRef} from 'react'
import {useXlsFormFillerContext} from '../XlsFormFiller.tsx'
import {cssMixins} from '../../theme.ts'

const ImageContainer = styled('div')(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightBold,
  position: 'relative',
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: '100%',
  maxHeight: 200,
  objectFit: 'contain',
  borderRadius: (theme.shape.borderRadius - 4) + 'px',
  display: 'flex',
  justifyContent: 'center',
}))

const ImageHeader = styled('div')(({theme}) => ({
  borderRadius: theme.shape.borderRadius + 'px',
  position: 'absolute',
  height: 30,
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  top: -15,
  backdropFilter: 'blur(6px)',
  background: alpha(theme.palette.background.paper, .7),
  boxShadow: theme.shadows[1],
  // ...cssMixins.truncate,
  // minWidth: 0,
  maxWidth: '80%',
}))

const Image = styled('img')(({theme}) => ({
  margin: 'auto',
  height: '100%',
  maxHeight: 200,
}))

const DeleteBtn = styled(IconButton)(({theme}) => ({
  marginRight: theme.spacing(-1),
  marginLeft: theme.spacing(1),
}))

export const QuestionImage = ({
  onClear,
  file,
  onChange
}: {
  file?: File
  onClear: () => void
  onChange: (_: File) => void
}) => {
  const ctx = useXlsFormFillerContext()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const previewUrl = useMemo(() => {
    if (!file) return
    return URL.createObjectURL(file)
  }, [file])

  const handleFile = (file: File) => {
    onChange(file)
  }

  const handleDelete = () => {
    onClear()
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
        {file ? ctx.labels.selectImage : ctx.labels.changeImage}
      </Button>

      {previewUrl && (
        <ImageContainer>
          <ImageHeader>
            <div style={{
              ...cssMixins.truncate,
            }}>
              {file!.name}
            </div>

            <DeleteBtn
              aria-label="delete"
              color="primary"
              onClick={handleDelete}
              size="small"
            >
              <Icon fontSize="small">delete</Icon>
            </DeleteBtn>
          </ImageHeader>
          <Image
            src={previewUrl}
            alt="Preview"
          />
        </ImageContainer>
      )}
    </>
  )
}
