export default function Main() {

    function Card() {
        return (
            <div className="max-w-xs m-4 flex flex-col bg-white hover:bg-gray-50 text-gray-700 rounded-xl p-8 shadow-md">
                <img src="shirt.png" className="w-48 mx-auto"></img>
                <div className="flex">
                    <div className="flex flex-col">
                        <h1 className="text-lg">Sick Black T-Shirt</h1>
                        <p className="text-sm text-gray-500">This t-shirt is totally wicked and looks super rad with a nice pair of loafers.</p>
                    </div>
                    <span className="ml-8 font-semibold">$35.00</span>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full mx-auto pt-32 pb-8 flex flex-wrap justify-center">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )

}