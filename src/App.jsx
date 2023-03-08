import "./App.css";
import { HeaderText, LeftBox, RightBox } from "./MyComponent";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img
          className="headbgpic"
          src="https://i.ibb.co/FxrPzV6/untitled1.png"
        ></img>
        <div className="header1">
          <div className="header1a">
            <HeaderText text="Contact" />
          </div>
          <div className="header1b">
            <HeaderText text="caneliean@gmail.com" />
          </div>
          <div className="header1c">
            <HeaderText text="097-240-9402" />
          </div>
          <div className="header1d">
            <HeaderText text="LineID: caneliean" />
          </div>
          <div className="header1e">
            <HeaderText text="Facebook: Sakupan Slevin Jiang" />
          </div>
        </div>
        <div className="header2">
          <img
            className="mypic"
            src="https://sv1.picz.in.th/images/2023/03/08/eRWiT0.jpg"
          />
          <div className="header2a">
            <HeaderText text="SUPACHAI SAKUPAN" />
          </div>
          <div className="header2b">
            <HeaderText text="Web Developer" />
          </div>
        </div>
      </div>
      <div className="leftpanel">
        <div className="skillbox">
          <h5 className="html">HTML</h5>
          <img className="htmlskill" src="rating4.png" />
          <h5 className="css">CSS</h5>
          <img className="cssskill" src="rating2.png" />
          <h5 className="java">Java Script</h5>
          <img className="javaskill" src="rating3.png" />
          <h5 className="react">React</h5>
          <img className="reactskill" src="rating3.png" />
          <LeftBox lpanel="SKILL" />
        </div>
        <div className="languagebox">
          <h5 className="thai">Thai</h5>
          <img className="thaiskill" src="rating4.png" />
          <h5 className="english">English</h5>
          <img className="engskill" src="rating2.png" />
          <h5 className="korean">Korean</h5>
          <img className="korskill" src="rating1.png" />
          <LeftBox lpanel="LANGUAGE" />
        </div>
        <div className="interestbox">
          <img className="dev" src="programming.png" />
          <h5 className="programming">Programming</h5>
          <img className="fix" src="maintenance.png" />
          <h5 className="fixxing">Fixxing</h5>
          <img className="food" src="dinner.png" />
          <h5 className="eating">Food</h5>
          <img className="movie" src="filmreview.png" />
          <h5 className="cinema">Movie</h5>
          <LeftBox lpanel="INTEREST" />
        </div>
      </div>
      <div className="rightpanel">
        <div className="profilebox">
          <RightBox rpanel="PROFILE" />
          <p className="profilecontent">
            THANK YOU FOR VISIT MY PROFILE
            <br /> I'm a Business Development Officer at Flash Express Company
            Ltd.
            <br />
            ResponsibilityLooking for customers who are interested in parcel
            transportation franchises. In the eastern area
            <br />
            Take care of branch customers and solve problems for customers.
            <br />
            Keep an eye on the overall picture of customers in the area of
            ​​responsibility in terms of parcel volume, store opening rate.
            <br />
            Experienced Customers Relationship on SMEs credit with Bank and
            Business Development with Flash Express Skilled in Sales, Business
            analysis ,Training and Microsoft Office.
            <br />
            I'm Interesting a position in sale or department of business
            development or strategy unit for improvement with problem solving
            which my human skills, change management and logical process
            thinking of economics from working experiences can be utilized
            effectively.
          </p>
        </div>
        <div className="educationbox">
          <RightBox rpanel="EDUCATION" />
          <p className="educationcontent">
            มหาวิทยาลัยเกษตรศาสตร์ ปริญญาตรี, Agricultural and Resources
            Economic 2010 - 2016
            <br />
            โรงเรียนนวมินทราชินูทิศ หอวัง นนทบุรี
            <br />
            สายคณิตศาสตร์-ภาษาอังกฤษ
            <br />
            2009 - 2004
          </p>
        </div>
        <div className="workexbox">
          <RightBox rpanel="WORK EXPRERIENCE" />
          <p className="workcontent">
            Business Development OfficerBusiness Development Officer <br />
            Flash Express ก.พ. 2021 - ปัจจุบัน · 2 ปี 2
            <br />
            Relationship OfficerRelationship Officer <br />
            Thai Credit Retail Bank Public Company Limited <br />
            ต.ค. 2020 - ก.พ. 2021 · 5 เดือน
            <br />
            Relationship OfficerRelationship Officer
            <br /> Small and Medium Enterprise Development Bank of Thailand{" "}
            <br />
            ส.ค. 2018 - ส.ค. 2020 · 2 ปี 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
