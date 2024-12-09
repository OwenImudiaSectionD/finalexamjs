const LibraryBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

function updateYear(LibraryBook,newYear){
    const updatedYear= {...LibraryBook, year: newYear};
    const updatedyearString = JSON.stringify(updatedYear)
    return updatedyearString
}

const update= updateYear(LibraryBook,2005);
console.log(update)