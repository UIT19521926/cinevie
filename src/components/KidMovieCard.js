
export default function KidMovieCard({title, image_url, genre, runtime, year}) {
    if(image_url === undefined) image_url = ''
    return (
        <div className="w-[290px] rounded-xl bg-glass-card p-4">
        <figure><img src={image_url} alt="" className=" rounded-2xl w-full h-full cursor-pointer"/></figure>
        <div className="flex justify-start flex-col gap-y-2 text-white mt-2">
            <p className=" text-gray-500">{`${year} / ${genre} / ${runtime}`}</p>
            <h2 className="card-title font-bold mt-2">{title}</h2>
        </div>
        </div>
    )
}