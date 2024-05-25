import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import styles from "./Drag.module.css";

export default function Drag() {
    return (
        <div className="card">
            <FileUpload
                name="demo[]"
                url={'/api/upload'}
                multiple accept="image/*"
                maxFileSize={1000000}
                emptyTemplate={
                <p className="m-0">Ajoutez les données.</p>
                }
            />
        </div>
    )
}