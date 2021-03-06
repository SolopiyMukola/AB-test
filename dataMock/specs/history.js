import { cards } from '../cards';
import { getRandomInt } from '../../utils/Helpers';

const { discover, visa, masterCard, amex, amexError, visaDeclined } = cards;

const MIN_NUM = 0;
const MAX_NUM = 1000;

const historyDataMock = {
  madeDiscoverCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireMonth: discover.expire.month,
      cardExpireYear: discover.expire.year,
      amountInput: '1012',
      taxInput: '0.92',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  madeVisaCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireMonth: visa.expire.month,
      cardExpireYear: visa.expire.year,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeMasterCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeAmexCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: amex.name,
      cardNumberInput: amex.number,
      cardCvvInput: amex.cvv,
      cardExpireMonth: amex.expire.month,
      cardExpireYear: amex.expire.year,
      amountInput: '70',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  madeMasterCardWithAuthAction: {
    generalInfo: {
      actionSelect: 'authorize',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '75',
      taxInput: '1',
      surchargeInput: '0.43',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      companyNameInput: 'Test Company n',
      poNumberInput: '004',
    },
    billingInfo: {
      checkBillingBlock: 'true',
      firstName: 'Nick',
      lastName: 'Test',
      street: 'street',
      street2: '695 Woodsman Ave',
      city: 'Skokie',
      zipCode: '60076',
      state: 'Illinois',
      phone: '(125)23423412',
    },
  },
  approveWithAuthorizeCreateCustomerByVisa: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
      addBillingInfo: {
        checkBillingBlock: 'true',
        firstName: 'Leo',
        lastName: 'Cockin',
        street: '123 6th S',
        street2: '123 8th St.',
        city: 'Melbourne',
        zipCode: '32904',
        state: 'Florida',
        phone: '(152)234234234',
      },
      addShippingInfo: {
        checkShippingBlock: 'true',
        firstName: 'Teo',
        lastName: 'Li',
        street: '124 6th St.',
        street2: '124 8th St.',
        city: 'Chevy Chase',
        zipCode: '20815',
        phone: '(380)990089998',
      },
      addPaymentMethodCard: {
        cardNameInput: visa.name,
        cardNumberInput: visa.number,
        cardExpireMonth: visa.expire.month,
        cardExpireYear: visa.expire.year,
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        actionSelect: 'authorize',
        cardNameInput: visa.name,
        cardNumberInput: 'autocomplete',
        cardCvvInput: visa.cvv,
        cardExpireMonth: visa.expire.month,
        cardExpireYear: visa.expire.year,
        amountInput: '80',
        taxInput: '1',
        surchargeInput: '2',
        avsStreetInput: '938 Whitemarsh Lane',
        avsZipInput: '11803',
      },
    },
  },

  approveWithPostAuthorizeCreateCustomerByAmex: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        actionSelect: 'postauthorize',
        cardNameInput: amex.name,
        cardNumberInput: amex.number,
        cardCvvInput: amex.cvv,
        authNumberInput: '212121',
        cardExpireMonth: amex.expire.month,
        cardExpireYear: amex.expire.year,
        amountInput: '77',
        taxInput: '0.19',
        editCustomerCheckbox: true,
      },
      shippingInfo: {
        checkShippingBlock: true,
        firstName: 'Olga',
        lastName: 'Riy',
        street: '591 Brickell Dr.',
        street2: '595 Brickell Dr.',
        city: 'Jamaica Plain',
        zipCode: '',
        state: 'Maryland',
        phone: '(125)212121345',
      },
    },
  },
  approveWithRefundCreateCustomerByDiscover: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
      addBillingInfo: {
        checkBillingBlock: 'true',
        firstName: 'Nick',
        lastName: 'Test',
        street: '694 Woodsman Ave.',
        street2: '695 Woodsman Ave.',
        city: 'Skokie',
        zipCode: '60076',
        state: 'Illinois',
        phone: '(125)23423412',
      },
      addPaymentMethodCard: {
        cardNameInput: discover.name,
        cardNumberInput: discover.number,
        cardExpireMonth: discover.expire.month,
        cardExpireYear: discover.expire.year,
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        actionSelect: 'refund',
        cardNumberInput: 'autocomplete',
        cardExpireMonth: discover.expire.month,
        cardExpireYear: discover.expire.year,
        amountInput: '80',
        taxInput: '12',
        surchargeInput: '10',
        descriptionInput: 'test description',
        poNumberInput: '21',
        invoiceNumber: '14',
      },
    },
  },
  queuedWithAuthCreateCustomerByVisa: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        actionSelect: 'authorize',
        cardNameInput: visa.name,
        cardNumberInput: visa.number,
        cardExpireMonth: visa.expire.month,
        cardExpireYear: visa.expire.year,
        amountInput: '76',
        taxInput: '0.31',
        surchargeInput: '1',
        descriptionInput: 'test description',
        poNumberInput: '888',
        invoiceNumber: '999',
        editCustomerCheckbox: true,
      },
      billingInfo: {
        checkBillingBlock: 'true',
        firstName: 'Olga',
        lastName: 'Riy',
        street: '591 Brickell Dr.',
        street2: '595 Brickell Dr.',
        city: 'Jamaica Plain',
        zipCode: '02130',
        state: 'Maryland',
        phone: '(125)212121345',
      },
      shippingInfo: {
        checkShippingBlock: 'true',
        firstName: '',
        sameBillingInput: 'true',
      },
    },
  },
  madeCaptureMasterCardWithAuthAction: {
    generalInfo: {
      actionSelect: 'authorize',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '78',
      taxInput: '2',
      surchargeInput: '2.22',
      descriptionInput: 'test description',
      invoiceNumber: '999',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      poNumberInput: '888',
    },
  },
  madeCaptureAmexCardWithPostAuthAction: {
    generalInfo: {
      actionSelect: 'postauthorize',
      cardNameInput: amex.name,
      cardNumberInput: amex.number,
      cardCvvInput: amex.cvv,
      cardExpireMonth: amex.expire.month,
      cardExpireYear: amex.expire.year,
      authNumberInput: '212121',
      amountInput: '77.19',
      taxInput: '2',
      surchargeInput: '2.22',
      companyNameInput: 'Test Company n',
    },
  },
  madeErrorWithChargeByAmex: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: amexError.name,
      cardNumberInput: amexError.number,
      cardCvvInput: amexError.cvv,
      cardExpireMonth: amexError.expire.month,
      cardExpireYear: amexError.expire.year,
      amountInput: '349.01',
      companyNameInput: 'Test Company n',
    },
    billingInfo: {
      checkBillingBlock: 'true',
      firstName: 'Olga',
      lastName: 'Riy',
      street: '591 Brickell Dr.',
      street2: '595 Brickell Dr.',
      city: 'Jamaica Plain',
      zipCode: '02130',
      state: 'Maryland',
      phone: '(125)212121345',
    },
  },
  madeDeclineWithChargeByVisa: {
    generalInfo: {
      cardNumberInput: visaDeclined.number,
      cardNameInput: visaDeclined.name,
      cardCvvInput: visaDeclined.cvv,
      cardExpireMonth: visaDeclined.expire.month,
      cardExpireYear: visaDeclined.expire.year,
      amountInput: '137.50',
    },
  },
  refundTransactionWithCaptureStatus: {
    generalInfo: {
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireMonth: discover.expire.month,
      cardExpireYear: discover.expire.year,
      amountInput: '1012.92',
    },
  },
  refundTransactionWithQueuedStatus: {
    generalInfo: {
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireMonth: visa.expire.month,
      cardExpireYear: visa.expire.year,
      amountInput: '77',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  rechargeTransactionWithQueuedStatus: {
    generalInfo: {
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireMonth: masterCard.expire.month,
      cardExpireYear: masterCard.expire.year,
      amountInput: '75',
      taxInput: '2',
      surchargeInput: '2.22',
      descriptionInput: 'test',
      invoiceNumber: '211',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      poNumberInput: '143',
      emailInput: 'test@codemotion.eu',
    },
    billingInfo: {
      checkBillingBlock: 'true',
      firstName: 'Nick',
      lastName: 'Test',
      street: '694 Woodsman Ave.',
      street2: '695 Woodsman Ave',
      city: 'Skokie',
      zipCode: '60076',
      state: 'Illinois',
      phone: '(125)23423412',
    },
    shippingInfo: {
      checkShippingBlock: 'true',
      firstName: 'Olga',
      lastName: 'Riy',
      street: '591 Brickell Dr.',
      street2: '595 Brickell Dr.',
      city: 'Jamaica Plain',
      zipCode: '02130',
      state: 'Maryland',
      phone: '(125)212121345',
    },
  },
  successCheckingWithChargeAction: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061000227',
      accountNumberInput: '10102233',
      amountInput: '1053.1',
      taxInput: '10',
      surchargeInput: '15',
      companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      invoiceNumber: '90',
      poNumberInput: '99',
      descriptionInput: 'test',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      emailInput: 'test@codemotion.eu',
    },
    billingInfo: {
      firstName: 'Nick',
      lastName: 'Test',
      street: '694 Woodsman Ave.',
      street2: '695 Woodsman Ave.',
      city: 'Skokie',
      zipCode: '60076',
      state: 'Illinois',
      phone: '(125)23423412',
    },
    shippingInfo: {
      firstName: 'Olga',
      lastName: 'Riy',
      street: '591 Brickell Dr.',
      street2: '595 Brickell Dr.',
      city: 'Jamaica Plain',
      zipCode: '02130',
      state: 'Maryland',
      phone: '(125)212121345',
    },
  },
  successRefundWithExistingCustomer: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company 1 ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      },
    },
    processTransactionCheck: {
      generalInfo: {
        checkNameInput: 'Test Check',
        accountTypeInput: 'Savings',
        transactionTypeInput: 'TEL',
        routingNumberInput: '061000227',
        accountNumberInput: '10103344',
        amountInput: '1222.17',
        invoiceNumber: '90',
        poNumberInput: '99',
        descriptionInput: 'test',
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
        emailInput: 'test@codemotion.eu',
      },
      billingInfo: {
        firstName: 'Nick',
        lastName: 'Test',
        street: '694 Woodsman Ave.',
        street2: '695 Woodsman Ave.',
        city: 'Skokie',
        zipCode: '60076',
        state: 'Illinois',
        phone: '(125)23423412',
      },
      shippingInfo: {
        firstName: 'Olga',
        lastName: 'Riy',
        street: '591 Brickell Dr.',
        street2: '595 Brickell Dr.',
        city: 'Jamaica Plain',
        zipCode: '02130',
        state: 'Maryland',
        phone: '(125)212121345',
      },
    },
  },
  errorCheckingWithChargeAction: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061000052',
      accountNumberInput: '10104455',
      amountInput: '1034.33',
      taxInput: '10',
    },
    billingInfo: {
      firstName: 'Nick',
      lastName: 'Test',
      street: '694 Woodsman Ave.',
      street2: '695 Woodsman Ave.',
      city: 'Skokie',
      zipCode: '60076',
      state: 'Illinois',
      phone: '(125)23423412',
    },
  },
  successVoidCheckWithRefund: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'TEL',
      routingNumberInput: '061000052',
      accountNumberInput: '10105566',
      amountInput: '1101.331',
      taxInput: '10',
      surchargeInput: '20',
    },
  },
  successVoidCheckWithCharge: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061000052',
      accountNumberInput: '10106677',
      amountInput: '155.2',
    },
  },
  checkingWithRechargeAction: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'WEB',
      routingNumberInput: '061000227',
      accountNumberInput: '10108899',
      amountInput: '1243.45',
      taxInput: '10',
      surchargeInput: '20',
      companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      invoiceNumber: '90',
      poNumberInput: '99',
      descriptionInput: 'test',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      emailInput: 'test@codemotion.eu',
    },
    billingInfo: {
      firstName: 'Nick',
      lastName: 'Test',
      street: '694 Woodsman Ave.',
      street2: '695 Woodsman Ave.',
      city: 'Skokie',
      zipCode: '60076',
      state: 'Illinois',
      phone: '(125)23423412',
    },
    shippingInfo: {
      firstName: 'Olga',
      lastName: 'Riy',
      street: '591 Brickell Dr.',
      street2: '595 Brickell Dr.',
      city: 'Jamaica Plain',
      zipCode: '02130',
      state: 'Maryland',
      phone: '(125)212121345',
    },
  },
  dashboardAndCloseBatch: {
    generalInfo: {
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireMonth: visa.expire.month,
      cardExpireYear: visa.expire.year,
      amountInput: '76.31',
    },
  },
};

export {
  historyDataMock,
};
