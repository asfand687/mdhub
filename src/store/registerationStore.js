import { create } from 'zustand'

export const registerationStore = create((set) => ({
  formStep: 0,
  selectedAccountType: 'individual',
  paymentMode: "yearly",
  changeSelectedAccountType: (accountType) => set((state) => ({ selectedAccountType: accountType })),
  increaseFormStep: () => set((state) => ({ formStep: state.formStep + 1 })),
  decreaseFormStep: () => set((state) => ({ formStep: state.formStep - 1 })),
  setPaymentMode: (value) => set((state) => ({ paymentMode: value })),
  registerationFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Canada',
    creditCardNumber: '',
    creditCardExpiry: '',
    creditCardCvc: ''
  },
  showFirstFamilyMemberForm: false,
  setShowFirstFamilyMemberForm: (value) => set({ showFirstFamilyMemberForm: value }),
  showSecondFamilyMemberForm: false,
  setShowSecondFamilyMemberForm: (value) => set({ showSecondFamilyMemberForm: value }),
  showThirdFamilyMemberForm: false,
  setShowThirdFamilyMemberForm: (value) => set({ showThirdFamilyMemberForm: value }),
  showFourthFamilyMemberForm: false,
  setShowFourthFamilyMemberForm: (value) => set({ showFourthFamilyMemberForm: value }),
  firstFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  secondFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  thirdFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  fourthFamilyMemberFormData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  },
  handleRegisterationFormDataChange: (name, value) => set((state) => ({ registerationFormData: { ...state.registerationFormData, [name]: value } })),
  handleFirstFamilyMemberFormDataChange: (name, value) => set((state) => ({ firstFamilyMemberFormData: { ...state.firstFamilyMemberFormData, [name]: value } })),
  handleSecondFamilyMemberFormDataChange: (name, value) => set((state) => ({ secondFamilyMemberFormData: { ...state.secondFamilyMemberFormData, [name]: value } })),
  handleThirdFamilyMemberFormDataChange: (name, value) => set((state) => ({ thirdFamilyMemberFormData: { ...state.thirdFamilyMemberFormData, [name]: value } })),
  handleFourthFamilyMemberFormDataChange: (name, value) => set((state) => ({ fourthFamilyMemberFormData: { ...state.fourthFamilyMemberFormData, [name]: value } })),
  clearForms: () => set({
    formStep: 0,
    showFirstFamilyMemberForm: false,
    showSecondFamilyMemberForm: false,
    showThirdFamilyMemberForm: false,
    showFourthFamilyMemberForm: false,
    registerationFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      country: 'Canada',
      creditCardNumber: '',
      creditCardExpiry: '',
      creditCardCvc: ''
    },
    firstFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    secondFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    thirdFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
    fourthFamilyMemberFormData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    },
  })
}))