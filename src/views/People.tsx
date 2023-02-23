import React from 'react'
import FooterCompany from '../components/FooterCompany'
import HeaderCompany from '../components/HeaderCompany'
import HeaderPeople from '../components/HeaderPeople'
import SectionFivePeople from '../components/SectionFivePeople'
import SectionFourPeople from '../components/SectionFourPeople'
import SectionOnePeople from '../components/SectionOnePeople'
import SectionSixPeople from '../components/SectionSixPeople'
import SectionThreePeople from '../components/SectionThreePeople'
import SectionTwoPeople from '../components/SectionTwoPeople'

const People = () => {
  return (
    <>
    <HeaderPeople />
    <SectionOnePeople />
    <SectionTwoPeople />
    <SectionThreePeople />
    <SectionFourPeople />
    <SectionFivePeople />
    <SectionSixPeople />
    <FooterCompany />
    </>
  )
}

export default People