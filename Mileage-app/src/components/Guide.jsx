import "./Guide.css";
import GuideData from "./Guide-data";

const Guide = () => {
  return (
      <div className="guide">
        <GuideData 
        className="first-des"
        heading="How It Works"
        text="Our website allows you to track your mileage and expenses. You can create an account and start tracking your mileage and expenses right away. You can also view your mileage and expenses history and generate reports."
        img1="https://i.insider.com/60c241e56d855e00181575f7?width=700"
        />

       <GuideData 
        className="first-des-reverse"
        heading="How Does it Help My Taxes?"
        text="You Can use the mileage and expenses data to calculate your tax deductions. You can also generate reports to help you with your tax filing. You can also export your data to a CSV file to use with your tax software."
        img1="https://images.template.net/wp-content/uploads/2016/12/20051554/Blank-Mileage-Reimbursement-Form.jpg"
        /></div> 
  );
}

export default Guide;