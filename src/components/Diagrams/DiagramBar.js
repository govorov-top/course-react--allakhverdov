import './DiagramBar.css';
function DiagramBar(props) {
    const {value, label, maxValue} = props;
    let barFillHeight = '0%';
    console.log(maxValue)
    if (maxValue > 0){
        barFillHeight = Math.round(value / maxValue * 100) + '%'
    }
    return (
        <div className="diagram-bar">
            <div className="diagram-bar__inner">
                <div className="diagram-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="diagram-bar__label">{label}</div>
        </div>
    );
}
export default DiagramBar;