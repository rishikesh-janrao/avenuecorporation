
function Row({ children, productKey, flexDirection, justifyContent, alignItems, classList = "" }) {
    return (
        <div key={productKey} className={`product-row flex-direction-${flexDirection} justify-content-${justifyContent} align-items-${alignItems}  ${classList}`}>
            {children}
        </div>
    )
}

export default Row;