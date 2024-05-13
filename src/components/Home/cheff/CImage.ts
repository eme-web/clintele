import CinnamonImage from '../../../assets/cinnamon-rolls.png';
import SausageImage from '../../../assets/sausage-rolls.png';


export type ChefImage = {
    default: string;
};

export const ImageList: Record<string, string> = {
    "sausage-rolls.png": SausageImage as string,
    "cinnamon-rolls.png": CinnamonImage as string,
};