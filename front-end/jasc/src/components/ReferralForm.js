// ReferralForm.js
import React from 'react';
import '../styles/ReferralForm.css';

function ReferralForm() {
    return (
        <div className="form-container">
            <h1>Referral Form</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="firstname">Jobseeker First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Jobseeker Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Jobseeker Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Jobseeker Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>I am:</label>
                    <div>
                        <input type="radio" id="jobseeker" name="iam" value="jobseeker" />
                        <label htmlFor="jobseeker">A jobseeker and I want to sign up for the fall 2023 job fair</label>
                    </div>
                    <div>
                        <input type="radio" id="community_partner" name="iam" value="community_partner" />
                        <label htmlFor="community_partner">A community partner (PO, community organization, etc.) referring a jobseeker</label>
                    </div>
                </div>
                <h2>Referrer Information</h2>
                <label>Thanks for taking the time to give us information about the jobseeker you are referring!</label>
                <div className="form-group">
                    <label htmlFor="referrername">Referrer Name</label>
                    <input type="text" id="referrername" name="referrername" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="referrerorganization">Referrer Organization</label>
                    <input type="text" id="lastname" name="referrerorganization" placeholder="Organization" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Referrer Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                </div>
                <label>Has the jobseeker been consistent in meeting your expectations (returning calls, coming to scheduled appointments, following through, etc.)?</label>
       <div class="radio-buttons">
            <label for="rating1">1</label><br></br><br></br>
            <label for="rating2">2</label><br></br><br></br>
            <label for="rating3">3</label><br></br><br></br>
            <label for="rating4">4</label><br></br><br></br>
            <label for="rating5">5</label><br></br><br></br>
        </div>
        <div class="radio-buttons">
           <label> <input type="radio" id="rating1" name="rating" value="1"></input></label><br></br>
            <label><input type="radio" id="rating2" name="rating" value="2"></input></label><br></br>
            <label><input type="radio" id="rating3" name="rating" value="3"></input></label><br></br>
            <label><input type="radio" id="rating4" name="rating" value="4"></input></label><br></br>
            <label><input type="radio" id="rating5" name="rating" value="5"></input></label><br></br>
        </div>
        <label>What barriers have you identified that the jobseeker has that relate to employment? (Check as many as apply.)</label>

    <div class="checkbox-container">
    <label for="barrier1"><input type="checkbox" id="barrier1" name="barrier[]" value="Transportation"></input>  Transportation </label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier2"><input type="checkbox" id="barrier2" name="barrier[]" value="Housing insecurity"></input> Housing insecurity</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier3"><input type="checkbox" id="barrier3" name="barrier[]" value="Computer literacy"></input>  Computer literacy</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier4"><input type="checkbox" id="barrier4" name="barrier[]" value="ID documentation"></input> ID documentation</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier5"><input type="checkbox" id="barrier5" name="barrier[]" value="Mental health"></input>  Mental health</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier6"><input type="checkbox" id="barrier6" name="barrier[]" value="Food insecurity"></input>  Food insecurity</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier7"><input type="checkbox" id="barrier7" name="barrier[]" value="Lack of educationi"></input>  Lack of education</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier8"><input type="checkbox" id="barrier8" name="barrier[]" value="Lack of work experience"></input>  Lack of work experience</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier9"><input type="checkbox" id="barrier9" name="barrier[]" value="Interview and/or work clothing"></input>  Interview and/or work clothing</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier10"><input type="checkbox" id="barrier10" name="barrier[]" value="Childcare"></input>  Childcare</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier11"><input type="checkbox" id="barrier11" name="barrier[]" value="Disability"></input>  Disability</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier12"><input type="checkbox" id="barrier12" name="barrier[]" value="None"></input>  Unknown</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier13"><input type="checkbox" id="barrier13" name="barrier[]" value="Other..."></input>  Other...</label><br></br>
</div>
<label>What convictions does the jobseeker have?</label>
    <div class="checkbox-container">
    <label for="barrier1"><input type="checkbox" id="barrier1" name="barrier[]" value="Sex offense"></input>  Sex offense </label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier2"><input type="checkbox" id="barrier2" name="barrier[]" value="Violent offense"></input> Violent offense</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier3"><input type="checkbox" id="barrier3" name="barrier[]" value="Armed Criminal Action"></input>  Armed Criminal Action</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier4"><input type="checkbox" id="barrier4" name="barrier[]" value="Offense involving children"></input> Offense involving children</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier5"><input type="checkbox" id="barrier5" name="barrier[]" value="Theft"></input>  Theft</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier6"><input type="checkbox" id="barrier6" name="barrier[]" value="Drug-related offense"></input>  Drug-related offense</label><br></br>
    </div>
    <div className="form-group">
    <label htmlFor="shortanswer">Date of most recent felony conviction</label>
    <input type="text" id="shortanswer" name="shortanswer" placeholder="Answer" rows="6" cols="30"></input>
</div>
<div className="form-group">
    <label>Does the jobseeker know that you are referring them to SLU TWA?</label>
    <div>
        
        <label htmlFor="yes"><input type="radio" id="yes" name="yes" value="yes"></input>  Yes</label>
    </div>
    <div>
        <label htmlFor="no"><input type="radio" id="no" name="yes" value="no"></input>  No</label>
    </div>
</div>   
<div className="form-group">
    <label htmlFor="shortanswer">Is there anything else you want TWA to know about the jobseeker you are referring? (Optional)</label>
    <input type="text" id="shortanswer" name="shortanswer" placeholder="Answer" rows="6" cols="30"></input>
</div>
<div className="form-group">
    <label htmlFor="description">  Tell Us About Yourself</label>
    <input type="text" id="description" name="description" placeholder="Description" rows="6" cols="30"></input>
</div>
<label>What barriers or issues do you want us to know about that might make it hard for you to look for or keep a job? (Check as many boxes as apply.)</label>
<div class="checkbox-container">
    <label for="barrier1"><input type="checkbox" id="barrier1" name="barrier[]" value="Transportation"></input>  Transportation </label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier2"><input type="checkbox" id="barrier2" name="barrier[]" value="Housing insecurity"></input> Housing insecurity</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier3"><input type="checkbox" id="barrier3" name="barrier[]" value="Computer literacy"></input>  Computer literacy</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier4"><input type="checkbox" id="barrier4" name="barrier[]" value="ID documentation"></input> ID documentation</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier5"><input type="checkbox" id="barrier5" name="barrier[]" value="Mental health"></input>  Mental health</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier6"><input type="checkbox" id="barrier6" name="barrier[]" value="Food insecurity"></input>  Food insecurity</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier7"><input type="checkbox" id="barrier7" name="barrier[]" value="Lack of educationi"></input>  Lack of education</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier8"><input type="checkbox" id="barrier8" name="barrier[]" value="Lack of work experience"></input>  Lack of work experience</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier9"><input type="checkbox" id="barrier9" name="barrier[]" value="Interview and/or work clothing"></input>  Interview and/or work clothing</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier10"><input type="checkbox" id="barrier10" name="barrier[]" value="Childcare"></input>  Childcare</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier11"><input type="checkbox" id="barrier11" name="barrier[]" value="Disability"></input>  Disability</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier12"><input type="checkbox" id="barrier12" name="barrier[]" value="None"></input>  Unknown</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier13"><input type="checkbox" id="barrier13" name="barrier[]" value="Other..."></input>  Other...</label><br></br>
    </div>
<label>We want to make sure to match you with employers who do not have restrictions on hiring someone with your particular background.  To your comfort level, please check any boxes for charges that you think will come up when an employer does your background check:</label>
<div class="checkbox-container">
    <label for="barrier1"><input type="checkbox" id="barrier1" name="barrier[]" value="Sex offense"></input>  Sex offense </label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier2"><input type="checkbox" id="barrier2" name="barrier[]" value="Violent offense"></input> Violent offense</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier3"><input type="checkbox" id="barrier3" name="barrier[]" value="Armed Criminal Action"></input>  Armed Criminal Action</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier4"><input type="checkbox" id="barrier4" name="barrier[]" value="Offense involving children"></input> Offense involving children</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier5"><input type="checkbox" id="barrier5" name="barrier[]" value="Theft"></input>  Theft</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier6"><input type="checkbox" id="barrier6" name="barrier[]" value="Drug-related offense"></input>  Drug-related offense</label><br></br>
    </div>
    <div class="checkbox-container">
    <label for="barrier7"><input type="checkbox" id="barrier7" name="barrier[]" value="other.."></input>  Other..</label><br></br>
    </div>
<div className="form-group">
    <label htmlFor="description">  Date of most recent felony conviction (estimate to the best of your knowledge)</label>
    <input type="text" id="description" name="description" placeholder="Description" rows="6" cols="30"></input>
</div>
<div className="form-group">
    <label htmlFor="description">  (Optional) Is there anything else we should know before we pair you with a volunteer job coach?</label>
    <input type="text" id="description" name="description" placeholder="Description" rows="6" cols="30"></input>
</div>
<input type="submit" value="Submit"></input>
      </form>
        </div>
    );
}

export default ReferralForm;
