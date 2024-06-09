import metadata from "./metadata.model";

type VegetarianDish = {
    metadata: metadata,
    VegetarianDishes:
    {
        _id: string,
        dishName: string,
        dishType: string,
        timePrepare: string,
        timeCooking: string,
        description: string,
        title: string,
        tutorialVideo: string,
        vegetarianDishImages: [
            {
                url: string,
                cloudinary_id: string,
                _id: string
            }
        ],
        chefName: string,
        __v: string,
        request: {
            type: string,
            description: string,
            url: string
        }
    }[]

}
export default VegetarianDish;
