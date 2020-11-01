import Image from '../models/Image';
import Imagem from '../models/Image';

export default{
    render(image: Imagem){
        return{
            id: image.id,
            path:'http://192.168.99.15:3333/uploads/'+image.path,
        }
    },

    renderMany(images: Imagem[]){
        return images.map(image => this.render(image));
    }
}
