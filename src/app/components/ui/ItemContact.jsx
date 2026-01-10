const ItemContact = ({ logo, title, data, url }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-xl shrink-0">
                <i className={`bi bi-${logo} text-2xl text-white`}></i>
            </div>
            <div>
                <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
                {url ? (
                    <a href="mailto:contacto@adigma.com" className="text-white/90 hover:text-white transition-colors">{data}</a>
                ) : (
                    <p className="text-white/90">{data}</p>
                )}
            </div>
        </div>
    )
}

export default ItemContact