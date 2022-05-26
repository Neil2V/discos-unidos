import {Schema, model, Document} from 'mongoose'

export interface IDisco extends Document {
    title: string;
    description: string;
    imagePath: string;
}

const discosSchema = new Schema({
    title:{
        type : String,
        required: true,
        trim: true //espacios
    },
    artista:{
        type : String,
        required: true,
        trim: true
    },
    imagePath:{
        type : String,
        required: true
    }
},{
    versionKey: false,// para q no aparezca v
    timestamps: true // para crear dos campos, cuando fue creadoy cuando fue actualizado
})//prueba rama - grupo1



export default model('Disco',discosSchema)