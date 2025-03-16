export default function Inputs({ text, number, onChange }) {
    return (
        <>
            <label htmlFor="InputText">{text}</label>
            <input type="text" name="BMIcalulater" id="BMI-Calculater" onChange={onChange} value={number} />
        </>
    )
}