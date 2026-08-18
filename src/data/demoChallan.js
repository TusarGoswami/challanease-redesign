/**
 * Demo challan data for the interactive preview.
 * Clearly fictional — used only to demonstrate the interface.
 */

export const demoChallanRecords = {
  'DL01AB1234': {
    vehicleNumber: 'DL 01 AB 1234',
    ownerName: 'Demo User',
    challans: [
      {
        id: 'CH-2026-00147',
        violation: 'Signal jumping',
        section: 'S. 119/177 MV Act',
        amount: 1000,
        date: '12 Aug 2026',
        location: 'ITO Junction, New Delhi',
        status: 'pending',
        issuedBy: 'Traffic Police — Central District',
      },
      {
        id: 'CH-2026-00089',
        violation: 'Parking in no-parking zone',
        section: 'S. 122/177 MV Act',
        amount: 500,
        date: '03 Jul 2026',
        location: 'Connaught Place, New Delhi',
        status: 'paid',
        issuedBy: 'Traffic Police — New Delhi District',
      },
    ],
  },
  'MH02CD5678': {
    vehicleNumber: 'MH 02 CD 5678',
    ownerName: 'Demo User',
    challans: [
      {
        id: 'CH-2026-00231',
        violation: 'Over-speeding',
        section: 'S. 183 MV Act',
        amount: 2000,
        date: '18 Aug 2026',
        location: 'Western Express Highway, Mumbai',
        status: 'pending',
        issuedBy: 'Traffic Police — Andheri Division',
      },
    ],
  },
}

/**
 * Look up a demo record by normalising the input
 * (strip spaces, uppercase) and matching against known keys.
 */
export function lookupChallan(input) {
  const key = input.replace(/\s/g, '').toUpperCase()
  return demoChallanRecords[key] || null
}

/**
 * Features listed in the "How it works" section.
 */
export const steps = [
  {
    number: '01',
    title: 'Enter your vehicle details',
    description: 'Type your vehicle registration number — no OTP, no login, no friction.',
  },
  {
    number: '02',
    title: 'See your challan status',
    description: 'Get a clear overview of pending and paid challans in one place.',
  },
  {
    number: '03',
    title: 'Understand what needs attention',
    description: 'Each challan shows the violation, amount, date and location — no legal jargon.',
  },
  {
    number: '04',
    title: 'Take the next step',
    description: 'Know exactly what to do next, whether it\'s paying online or visiting an office.',
  },
]

/**
 * Trust / clarity points.
 */
export const clarityPoints = [
  {
    title: 'Clear next steps',
    description: 'Every challan tells you exactly what to do — no guessing.',
  },
  {
    title: 'No unnecessary navigation',
    description: 'Reach the information you need within seconds, not clicks.',
  },
  {
    title: 'Mobile-first experience',
    description: 'Designed for the phone in your pocket, not the desktop you don\'t have.',
  },
  {
    title: 'Transparent information',
    description: 'Status, amount, violation — everything visible at a glance.',
  },
]
