export class Loans {
    
    loanNumber: number;
    fname: string;
    lname:string;
    propertyAddress:string;
    loanType: string;
    loanAmount: number;
    loanTerm:number;
    loanStatus:string;
    loanManagementFees: number;
    originationDate: Date;
    lienInfo:string;
    legalDocument:string;
    loanHistory:string;

 
constructor(loanNumber, fname, lname, propertyAddress, loanType, loanAmount, loanTerm, loanStatus, loanManagementFees, originationDate, lienInfo, legalDocument, loanHistory){

    this.loanNumber=loanNumber;
    this.fname=fname;
    this.lname=lname;
    this.propertyAddress=propertyAddress;
    this.loanType=loanType;
    this.loanAmount=loanAmount;
    this.loanTerm=loanTerm;
    this.loanStatus=loanStatus;
    this.loanManagementFees=loanManagementFees;
    this.originationDate=originationDate;
    this.lienInfo=lienInfo;
    this.legalDocument=legalDocument;
    this.loanHistory=loanHistory;

}
 
}
