

export default function DFood({ children, tooltip }) {
    return (
        <>
        <div className="food-ly">
            <p>{children}</p>
            { tooltip ? <div style={{fontSize: 12, color: 'orange'}}>{tooltip}</div> : '' }
        </div>
        <style jsx>{`
            p { margin: 0 }
            .food-ly { margin-bottom: 0.5em; }
        `}</style>
        </>
        
    )
}