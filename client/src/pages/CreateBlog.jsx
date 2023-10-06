
const CreateBlog = () => {
    return (
        <div className="w-[90vw] lg:w-[60vw] mx-auto mt-10 gap-5">
            <h1 className="text-2xl font-bold text-center">Create Blog</h1>
            <form className="flex flex-col gap-3">
                <label htmlFor="title" className="font-semibold text-lg">Title : </label>
                <input type="text" name="title" id=" " placeholder="Enter the blog title" className="px-2 py-3 rounded-md outline-none border-2 border-grey-300"></input>

                <label htmlFor="description" className="font-semibold text-lg">Description : </label>
                <textarea className="p-3 rounded-md outline-none border-2 border-grey-300" rows={10}></textarea>
                <button type="sumbit" className="bg-purple-300 hover:bg-purple-500 py-3 rounded-md text-white text-xl">Post</button>
            </form>
        </div>
    )
}

export default CreateBlog