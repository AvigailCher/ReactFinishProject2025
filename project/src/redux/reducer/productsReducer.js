import { BOYS, EXCESORIS, GIRLS, NEWCOLLECTION, SALE, SHOES } from '../actionType';
// ייבוא כל קבצי התמונות מתיקיית images כולל תתי-תיקיות

const imagesContext = require.context('../../images', true, /\.(png|jpe?g|svg)$/);
// פונקציה שמנסה לטעון תמונה לפי נתיב יחסי מתוך images

const loadImage = (imageName) => {
  console.log("trying to load", imageName);
  try {
    // אין צורך להוסיף './' - context כבר עובד עם נתיבים יחסיים מתיקיית הבסיס
    return imagesContext(`./${imageName}`);
  } catch (error) {
    console.error('Image not found:', `./${imageName}`);
    return null;
  }
};


const initialState = {
  arr: [],
 
  girls: [
    {id: 202, name: "MIA DRESS – FLORAL", price: 89.90, images: ['girls/2/21.png', 'girls/2/22.png', 'girls/2/23.png', 'girls/2/24.png'].map(loadImage)},
    {id: 204, name: "CAMILLE SHIRT – OFFWHITE", price: 99.90, images: ['girls/4/41.png', 'girls/4/42.png', 'girls/4/43.png', 'girls/4/44.png'].map(loadImage)},
    {id: 205, name: "CAMLIN DRESS – LILAC", price: 99.90, images: ['girls/5/51.png', 'girls/5/52.png'].map(loadImage)},
    {id: 207, name: "MALIA DRESS – PINK", price: 99.90, images: ['girls/7/71.png', 'girls/7/72.png'].map(loadImage)},
    {id: 208, name: "CAMLUZ SKIRT – RED", price: 99.90, images: ['girls/8/81.png', 'girls/8/82.png', 'girls/8/83.png', 'girls/8/84.png'].map(loadImage) },
    {id: 209, name: "CAMEL DRESS", price: 99.90, images: ['girls/9/93.png', 'girls/9/92.png', 'girls/9/91.png'].map(loadImage)},
    {id: 210, name: "MILLYZ DRESS – LILAC", price: 99.90, images: ['girls/10/102.png', 'girls/10/103.png', 'girls/10/101.png'].map(loadImage)},
    {id: 214, name: "CAMLARI DRESS – PINK", price: 99.90, images: ['girls/13/131.png', 'girls/13/132.png', 'girls/13/133.png'].map(loadImage) },
    {id: 216, name: "ROSE DRESS – PINK", price: 99.90, images: ['girls/15/153.png', 'girls/15/152.png', 'girls/15/151.png'].map(loadImage)},
    {id: 212, name: "CAMELLIA DRESS - OFFWHITE", price: 99.90, images:['girls/16/161.png', 'girls/16/162.png', 'girls/16/163.png'].map(loadImage)},
    {id: 215, name: "CAMLUZ SKIRT – OFFWHITE", price: 99.90, images: ['girls/14/141.png', 'girls/14/142.png', 'girls/14/143.png'].map(loadImage)},

  ],
 
  shoes: [
    { id:401,name: "נעלי ספורט", price: 129.90, images: ['shoes/shose1.png'].map(loadImage)},
    { id:402,name: "נעלי ספורט ממותגות", price: 289.90,images: ['shoes/shose2.png'].map(loadImage) },
    { id:403,name: "נעלי בית מיחדות", price: 129.90, images: ['shoes/shose3.png'].map(loadImage)},
    { id:404,name: "נעלי בית מיחדות", price: 89.90, images: ['shoes/shose4.png'].map(loadImage)},
    { id:405,name: "נעליים מאוררות ויפות במיוחד", price: 129.90,images: ['shoes/shose5.png'].map(loadImage)},
    { id:406,name: "נעלי ספורט ליומיום והליכה", price: 89.90,images: ['shoes/shose6.png'].map(loadImage)},
    { id:407,name: "נעלי נוחות", price: 129.90,images: ['shoes/shose7.png'].map(loadImage)},
    { id:408,name: "נעלי נוחות", price: 89.90,images: ['shoes/shose8.png'].map(loadImage)},
    { id:409,name: "מותג נעלי ספורט", price: 129.90, images: ['shoes/shose9.png'].map(loadImage) },
    { id:410,name: "נעליים יפיפיות איכותיות במיוחד", price: 89.90,images: ['shoes/shose10.png'].map(loadImage)},
    { id:411,name: "נעלי ספורט", price: 129.90, images: ['shoes/shose11.png'].map(loadImage)},
    { id:412,name: "סנדלים לקיץ", price: 89.90,images: ['shoes/shose12.png'].map(loadImage) },
    { id:413,name: "נעלי ג'ינס מבד", price: 129.90, images: ['shoes/shose13.png'].map(loadImage)},
    { id:414,name: "נעלי ג'ינס מבד", price: 89.90, images: ['shoes/shose14.png'].map(loadImage)},
    { id:415,name: "נעלי בד", price: 129.90, images: ['shoes/shose15.png'].map(loadImage)},
    { id:416,name: "נעלי בד חדשניות ", price: 89.90,images: ['shoes/shose16.png'].map(loadImage) },
    { id:417,name: "כפכפים אלגנטיים", price: 89.90, images: ['shoes/shose17.png'].map(loadImage) } 
  ],
  
  accessories: [
    { id:601,name: "עניבה איכותית", price: 59.90, images: ['excerosie/1.png'].map(loadImage)},
    { id:602,name: "בקבוק ספורט", price: 129.90, images: ['excerosie/3.png'].map(loadImage)},
    { id:603,name: "שעון מעורר בעיצוב חדשני", price: 289.90, images: ['excerosie/4.png'].map(loadImage)},
    { id:604,name: " ארנק סטילינג", price: 129.90, images: ['excerosie/5.png'].map(loadImage)},
    { id:605,name: "בקבוק אלגנט שומר קור", price: 89.90,images: ['excerosie/6.png'].map(loadImage)},
    { id:606,name: "כספת חדשנית ומיוחדת", price: 129.90, images: ['excerosie/7.png'].map(loadImage)},
    { id:607,name: "רמקול נייד איכותי", price: 89.90, images: ['excerosie/8.png'].map(loadImage)},
    { id:608,name: "כובע גרב", price: 59.90,images: ['excerosie/9.png'].map(loadImage)},
    { id:609,name: "מחזיק פלאפון ממותג", price: 89.90,images: ['excerosie/10.png'].map(loadImage)},
    { id:610,name: "מזוודה איכותית ממותגת", price: 429.90, images: ['excerosie/11.png'].map(loadImage)},
    { id:611,name: "בקבוק ספורט", price: 89.90, images: ['excerosie/12.png'].map(loadImage)},
    { id:612,name: "קלמר בית ספר", price: 49.90,images: ['excerosie/13.png'].map(loadImage)},
    { id:613,name: "גרבי פלנל נעימות-2 זוגות", price: 29.90, images: ['excerosie/14.png'].map(loadImage)},
    { id:614,name: "גרבי פלנל נעימות-3 זוגות", price: 39.90,images: ['excerosie/15.png'].map(loadImage)},
    { id:615,name: "צמידים איכותיים", price: 89.90, images: ['excerosie/16.png'].map(loadImage)},
    { id:616,name: "מחברות ממותגות", price: 49.90,images: ['excerosie/17.png'].map(loadImage)},  
    { id:617,name: "חגורה איכותית מבד", price: 89.90, images: ['excerosie/18.png'].map(loadImage)},
    { id:618,name: "תיק גב ממותג", price: 129.90,images: ['excerosie/19.png'].map(loadImage)},
   
  ],

};

export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case BOYS:
            return { ...state,arr:state.boys};
        case GIRLS:
            return { ...state,arr:state.girls};   
        case SALE:
            return { ...state,arr:state.sale};
        case SHOES:
            return { ...state,arr:state.shoes};
        case NEWCOLLECTION:
            return { ...state,arr:state.newCollection};
        case EXCESORIS:
            return { ...state,arr:state.accessories};    
        
        default:
            return state;
        
        
        
        }
}




