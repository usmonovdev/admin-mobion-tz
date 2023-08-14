import React from 'react'
import { TextHeader, TextP } from '../mui-customizations/Typography'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <div className='my-6 flex flex-col gap-6 phone:h-[500px] h-fit'>
      <TextHeader>{t("about.title")}</TextHeader>
      <TextP>{t("about.description")}</TextP>
    </div>
  )
}

export default About