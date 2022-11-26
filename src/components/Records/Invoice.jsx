import "./Invoice.css";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
    SideBar,
    WrapTitle,
    TitlesideBar,
    WrapList,
    UnOrderList,
    List,
    WrapMainTitle,
    MainTitle,
    CardInvoice,
    WrapMain,
    Label,
    InputFreelancer,
    WrapInfo,
    WrapInputDate,
    TheSelect,
    WrapServisec,
    SelectServisec,
    WrapCliantInfo,
    InputClaint,
    WrapCountryAndCourncy,
    SelectCountry,
    SelectCourncy,
    WrapInfoJop,
    InputJopTitle,
    InputPrice,
    WrapInputJop,
    InputDiscription,
    WrapAddItem,
    AddItemButton,
    PaymentMethodDiv,
    SelectPayment,
    InputFees,
    LabelChecbox,
    InvoiceButton,
    WrapLinks,
    WrapRecords,
    TitleRecords,
    CardRecords
} from "../Styled/StyledInvoice";

const Invoice = () => {
    return (
        <div style={{ display: "flex", gap: "40px" }}>
            <SideBar>
                <WrapTitle>
                    <TitlesideBar>Create</TitlesideBar>
                </WrapTitle>
                <WrapList>
                    <UnOrderList>
                        <List>
                            <NavLink className="links">
                                <WrapLinks>|</WrapLinks>
                                Invoice Records
                            </NavLink>
                        </List>
                        <List>
                            <NavLink className="links">
                                <WrapLinks>|</WrapLinks>Payout Records
                            </NavLink>
                        </List>
                        <List>
                            <NavLink className="links">
                                <WrapLinks>|</WrapLinks>Add Link
                            </NavLink>
                        </List>
                    </UnOrderList>
                </WrapList>
            </SideBar>
            <div>
                <WrapMainTitle>
                    <MainTitle>Create Invoice Records</MainTitle>
                </WrapMainTitle>
                <CardInvoice>
                    <WrapMain>
                        <Label>Freelancer Name</Label>
                        <InputFreelancer type="text" />
                    </WrapMain>
                    <WrapInfo>
                        <WrapInputDate>
                            <Label>Date</Label>
                            <input
                                type="date"
                                style={{
                                    width: "332px",
                                    height: "60px",
                                    border: "1px solid #BEC2C6",
                                    borderRadius: "7px",
                                    fontSize: "16px",
                                    padding: "20px 129px 19px 40px",
                                }}
                            />
                        </WrapInputDate>
                        <div style={{ position: "relative" }}>
                            <Label>Status</Label>
                            <TheSelect>
                                <option value="">Pending Payment</option>
                                <option value="">Paid</option>
                                <option value="">Send</option>
                            </TheSelect>
                            <MdKeyboardArrowDown className="arrow2" />
                        </div>
                    </WrapInfo>
                    <WrapServisec style={{ position: "relative" }}>
                        <Label>Service Number (Optional)</Label>
                        <SelectServisec style={{ appearance: "none" }}>
                            <option value="">One 1</option>
                            <option value="">Tow 2</option>
                            <option value="">Three 3</option>
                        </SelectServisec>
                        <MdKeyboardArrowDown className="arrow3" />
                    </WrapServisec>
                    <WrapCliantInfo>
                        <div>
                            <Label>Client Information</Label>
                        </div>
                        <div style={{ display: "flex", gap: "16px" }}>
                            <InputClaint placeholder="First name" />
                            <InputClaint placeholder="First name" />
                        </div>
                    </WrapCliantInfo>
                    <WrapMain
                        style={{ paddingTop: "0", paddingBottom: "12px" }}
                    >
                        <InputFreelancer type="email" placeholder="Email" />
                    </WrapMain>
                    <WrapCountryAndCourncy>
                        <div style={{ position: "relative" }}>
                            <SelectCountry placeholder="Country">
                                <option value="">USA</option>
                                <option value="">KSA</option>
                                <option value="">Palistaine</option>
                            </SelectCountry>
                            <MdKeyboardArrowDown className="arrow4" />
                        </div>
                        <div style={{ position: "relative" }}>
                            <SelectCourncy placeholder="USD">
                                <option value="">USD</option>
                                <option value="">EUR</option>
                                <option value="">INR</option>
                            </SelectCourncy>
                            <MdKeyboardArrowDown className="arrow5" />
                        </div>
                    </WrapCountryAndCourncy>
                    <WrapInfoJop>
                        <div>
                            <Label>Client Information</Label>
                        </div>
                        <WrapInputJop>
                            <InputJopTitle
                                type="text"
                                placeholder="Job title"
                            />
                            <InputPrice placeholder="$  0.00" />
                        </WrapInputJop>
                        <InputDiscription placeholder="Describtion" />
                    </WrapInfoJop>
                    <WrapAddItem>
                        <AddItemButton>+Add item or service</AddItemButton>
                    </WrapAddItem>
                    <PaymentMethodDiv style={{ position: "relative" }}>
                        <Label>Payment Method</Label>
                        <SelectPayment>
                            <option value="">Paypal</option>
                            <option value="">Payoner</option>
                            <option value="">Wise</option>
                            <option value="">Visa Card</option>
                        </SelectPayment>
                        <MdKeyboardArrowDown className="arrow3" />
                    </PaymentMethodDiv>
                    <PaymentMethodDiv style={{ margin: "0 0 27px 36px" }}>
                        <Label>Other Payment</Label>
                        <InputFreelancer type="text" />
                    </PaymentMethodDiv>
                    <PaymentMethodDiv style={{ margin: "0 0 24px 36px" }}>
                        <Label>Payment Gateway Fees</Label>
                        <InputFees placeholder="$   0.00" />
                    </PaymentMethodDiv>
                    <PaymentMethodDiv
                        style={{
                            margin: "0 0 60px 36px",
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="checkbox"
                            style={{
                                color: "none",
                                border: "1px solid #E2E2E2",
                                width: "19px",
                                height: "19px",
                            }}
                        />
                        <LabelChecbox>Allow Verified</LabelChecbox>
                    </PaymentMethodDiv>
                    <InvoiceButton>Add Invoice</InvoiceButton>
                </CardInvoice>
            </div>

            <WrapRecords>
                <TitleRecords>Preview</TitleRecords>
                <CardRecords></CardRecords>
            </WrapRecords>
        </div>
    );
};

export default Invoice;
