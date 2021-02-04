import members from '../members';
import books from '../books';
import slugify from "slugify";
const initialState = {
    members: members,
    books:books
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_MEMBER":
            const { newMember } = action.payload;
            newMember.slug = slugify(newMember.firstName.concat(' ', newMember.lastName), { lower: true });
            newMember.id = state.members.length + 1;
            return {
                 ...state, members: [...state.members, newMember],
            };
            case "ADD_BOOK":
            const { newBook } = action.payload;
            newBook.genre = newBook.genre.replaceAll(' ','').split(",");
            newBook.slug = slugify(newBook.title, { lower: true });
            newBook.id = state.books.length + 1;

                return {
                     ...state, books: [...state.books, newBook],
            };
        case "BORROW_BOOK":
            const borrowedBook = action.payload.borrowedBook;
            const memberID = action.payload.memberID;
            const borrwedMember = state.members.find((member) => member.id === parseInt(memberID));
            borrwedMember.currentlyBorrowedBooks = [...borrwedMember.currentlyBorrowedBooks, borrowedBook.id];
                    return {
                        ...state,
                        members:state.members.map((member) =>
                        member.id === memberID ? borrwedMember : member
                      ),
                        books: state.books.map((book) =>
                          book.id === borrowedBook.id ? borrowedBook : book
                        ),
            };
        case "RETURN_BOOK":
            const returnedBook = action.payload.returnedBook;
            const currentmemberID = action.payload.currentmemberID;
            const currentMember = state.members.find((member) => member.id === currentmemberID);
            currentMember.currentlyBorrowedBooks = currentMember.currentlyBorrowedBooks
                .filter((currbook) => currbook !== returnedBook.id);
                return {
                    ...state,
                    members:state.members.map((member) =>
                    member.id === currentmemberID ? currentMember : member
                    ),
                    books: state.books.map((book) =>
                        book.id === returnedBook.id ? returnedBook : book
                    ),
                };
        default:
            return state;
    }
   
}

export default reducer;