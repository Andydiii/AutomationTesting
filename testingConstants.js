// give user freedom to choose search criteria.
const USER_INFO = {
    userid: "liufs",
    password: "Password3"
};

// put in the product you wanna order here. find the product you wanna order in objects below. and fill the criteria
const product = 'CRU999';

// 'signle' / multiple / batch
const deliveryMethod = 'signle';


// CRC999 CRU999 are orderable 
const OrderProductC1 = {
    orderableproduct: ['CRC999', 'CRU999'],

    // options: 'MTO Collision Reference Number', 'Collision Date'
    searchCriteria1: 'Collision Date',

    // value for searchcriteria1
    searchCriteria1_value: '2024-11-18', 

    // only exists if SearchCriteria1 is Collision Date
    // options: 'Collision Report Number', 'VIN (Ontario only)', 'Plate Number', 'Ontario DL', 'Non-Ontario DL'
    searchCriteria2: 'Plate Number',

    // value for searchCriteria2
    searchCriteria2_value: 'ABC123',

    // optional:
    reference: 'test',

    // AU1 - AU24
    AuthorizedUse: 'AU01'
};

// CRCCRC CRCPBL CRCWA CRUCRC CRUPBL CRUWA 
const OrderProductC2 = {
    orderableproduct: ['CRCCRC', 'CRCPBL', 'CRCWA', 'CRUCRC', 'CRUPBL', 'CRUWA'],

    // 'Collision Date'
    searchCriteria1: 'Collision Date',

    // value for searchcriteria1
    searchCriteria1_value: '2024-11-18', 

    // only exists if SearchCriteria1 is Collision Date
    // options: 'Collision Report Number', 'VIN (Ontario only)', 'Plate Number', 'Ontario DL', 'Non-Ontario DL'
    searchCriteria2: 'Plate Number',

    // value for searchCriteria2
    searchCriteria2_value: 'ABC123',

    // optional:
    reference: 'test',

    // AU1 - AU24
    AuthorizedUse: 'AU1'
};

// CVD001 DLHCA999 DRAABS DRACABS DRCFOI999 DRECA999 DRVABS DRVABSRI DRVCABS DRVNMS DRVNMSC ISSDRVA 
//  DL, REF, AU
const OrderProductD1 = {
    orderableproduct: ['CVD001', 'DLHCA999', 'DRAABS', 'DRACABS', 'DRCFOI999', 'DRECA999', 'DRVABS', 'DRVABSRI', 'DRVCABS', 'DRVNMS', 'DRVNMSC', 'ISSDRVA'],

    // driver license:
    DL: 'A1111-11111-11111',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// DSNCA999
//  DL, searchFordate, Ref, AU
const OrderProductD2 = {
    orderableproduct: ['DSNCA999'],

    // driver license:
    DL: 'A1111-11111-11111',

    // searchFordate
    searchFordate: '2024-12-18',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// RINCA999 
// DL/RIN, searchFordate, ref, AU
const OrderProductD3 = {
    orderableproduct: ['RINCA999'],

    // driver license/RIN:
    DL: 'A1111-11111-11111',

    // searchFordate
    searchFordate: '2024-12-18',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// SVEH004 SVEH005 VEH003 VEH004 VEH005 VEHCA999 VINCA999
//    VIN, Ref, AU
const OrderProductV1 = {
    orderableproduct: ['SVEH004', 'SVEH005', 'VEH003', 'VEH004', 'VEH005', 'VEHCA999', 'VINCA999'],

    // VIN:
    VIN: 'A1111-11111-11111',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// PLT003 PLT004
//    plate/VIN, searchfor, ref, AU
const OrderProductV4 = {
    orderableproduct: ['PLT003', 'PLT004'],

    VIN: 'A1111-11111-11111',

    // searchFordate
    searchFordate: '2024-12-18',

    // ref
    ref: '',

    // Authorized Use: AU01 - AU24
    AU: 'AU01'
};

// VINDCA999 
//     VIN, searchFor, ref, AU
const OrderProductV5 = {
    orderableproduct: ['VINDCA999'],

    VIN: 'A1111-11111-11111',

    // searchFordate
    searchFordate: '2024-12-18',

    // ref
    ref: '',

    // Authorized Use: AU01 - AU24
    AU: 'AU01'
};

// PLCABS PLCASE PLCRLC PLCSBC PLDABS PLDAMP PLTDCA999 
//    plate, searchfor, ref, AU
const OrderProductP1 = {
    orderableproduct: ['PLCABS', 'PLCASE', 'PLCRLC', 'PLCSBC', 'PLDABS', 'PLDAMP', 'PLTDCA999' ],

    // plate #:
    Plate: 'ABC 123',

    // SearchForDate:
    SearchForDate: '2024-12-18',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// PLT005 PLT006 PLTCA999 PLHCA999
//    plate, ref , AU
const OrderProductP2 = {
    orderableproduct: ['PLT005', 'PLT006', 'PLTCA999', 'PLHCA999'],

    // plate #:
    Plate: 'ABC 123',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// CVO001, CVO2C999
//      CVOR/RIN, REF, AU
const OrderProductCV1 = {

    orderableproduct: ['CVO001', 'CVO2C999'],

    // CVOR/RIN #:
    CVOR: '001-234-567',

    // reference:
    REF: '',

    // Authorized Use: AU01 -AU24
    AU: 'AU01'
};

// REF AU
// ISSCARA ISSVEHA TOWCSVC999 TOWDSVC999 
const OrderProductISSTOW = {
    ref: '',

    // Authorized use: AU01 - AU24
    AU: 'AU01'
}

module.exports = { USER_INFO, product, OrderProductC1, OrderProductC2, deliveryMethod};





