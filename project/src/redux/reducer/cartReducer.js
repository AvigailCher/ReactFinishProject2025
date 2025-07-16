
// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY } from '../actionType';

// const initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       // אם הפריט כבר קיים בעגלה, עדכון הכמות
//       const existingItem = state.cart.find(
//         (item) => item.id === action.payload.id && item.size === action.payload.size
//       );
//       if (existingItem) {
//         return {
//           ...state,
//           cart: state.cart.map((item) =>
//             item.id === action.payload.id && item.size === action.payload.size
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cart: [...state.cart, action.payload],
//         };
//       }


  
//   case REMOVE_FROM_CART:
//   return {
//     ...state,
//     cart: state.cart.filter(
//       item => !(item.id === action.payload.productId && item.size === action.payload.size)
//     ),
//   };

   
//     case UPDATE_ITEM_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map(item => {
//           if (item.id === action.payload.itemId && item.size === action.payload.size) {
//             return { ...item, quantity: action.payload.quantity };
//           }
//           return item;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// export default cartReducer;
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY } from '../actionType';

const initialState = {
  cart: [], // העגלה מאופסת כברירת מחדל
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // בדיקה אם כבר קיים פריט עם אותו מזהה ואותה מידה
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      
      if (existingItem) {
        // אם קיים – עדכון כמות
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // אם לא קיים – הוספה חדשה לעגלה
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case REMOVE_FROM_CART:
      // סינון כל פריט שתואם גם מזהה וגם מידה – מסיר אותו מהעגלה
      return {
        ...state,
        cart: state.cart.filter(
          item => !(item.id === action.payload.productId && item.size === action.payload.size)
        ),
      };

    case UPDATE_ITEM_QUANTITY:
      // עדכון כמות עבור פריט מסוים לפי מזהה ומידה
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload.itemId && item.size === action.payload.size) {
            return { ...item, quantity: action.payload.quantity };
          }
          return item;
        }),
      };

    default:
      return state; // פעולה שלא מזוהה – מחזירה את המצב כפי שהוא
  }
};

export default cartReducer;
