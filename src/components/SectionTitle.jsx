function SectionTitle(props){
    const {subheading, heading} = props;

    return(
        <div className="section-title">
            {subheading && <span>{subheading}</span>}
            <h1>{heading}</h1>
        </div>
    )
}

export default SectionTitle