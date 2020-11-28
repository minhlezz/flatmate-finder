import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { gql, useMutation } from '@apollo/client';

// const uploadFileMutation = gql`
//   mutation($file: Upload!) {
//     uploadFile(file: $file)
//   }
// `;


function FileUpload() {
    const onDrop = useCallback(
        (acceptedFiles) => {
            //use something with the files
            console.log(acceptedFiles);
        },
        [],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    // const [uploadFile, { loading, error }] = useMutation(U_FileMutation, {
    //     variables: file
    // })

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ?
                    <p>Drop the files here...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </>

    )

}

export default FileUpload;