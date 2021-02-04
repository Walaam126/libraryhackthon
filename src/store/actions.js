export const ADD_MEMBER = "ADD_MEMBER";


export const ADD_BOOK = "ADD_BOOK";
export const BORROW_BOOK = "BORROW_BOOK";
export const RETURN_BOOK = "RETURN_BOOK";



export const addMember = (newMember) => {
    return {
        type: ADD_MEMBER,
        payload:{newMember}
    }
}

export const addBook = (newBook) => {
    return {
        type: ADD_BOOK,
        payload:{newBook}
    }
}

export const BorrowBook = (borrowedBook, memberID) => {
    return {
        type: BORROW_BOOK,
        payload: { borrowedBook: borrowedBook, memberID: memberID }
    }
}

export const ReturnBook = (returnedBook, currentmemberID) => {
    return {
        type: RETURN_BOOK,
        payload: { returnedBook: returnedBook, currentmemberID: currentmemberID }
    }
}
