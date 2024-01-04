import React from 'react'

const Hero = () => {
  const phrase = [""]

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      
      <div className=" text-white text-center flex flex-col">
        <p className="pb-10">
          Olá, meu nome é Fernando Oliveira.<br/>
          Sou formado no curso Técnico em Desenvolvimento de Sistemas<br/>
          e estou cursando Análise e Desenvolvimento de Sistemas
        </p>

        <div className="text-white flex flex-row">

          <p className="px-10 basis-1/2">
            <span className='bold-16'>Durante o curso Técnico em Desenvolvimento de Sistemas</span>, aprendi uma ampla gama de conhecimentos práticos e teóricos relacionados à criação, manutenção e implementação de sistemas de software. Ao longo do programa, fui exposto a diversos tópicos essenciais para a minha formação:
          </p>

          <p className="px-10 basis-1/2">
          <span className="bold-16">Programação de Computadores:</span> Desenvolvi habilidades em várias linguagens de programação, como C#, PHP, Javascript, entre outras. Pude aprender a escrever, depurar e manter código de maneira eficiente.

          </p>
        </div>

        <div className="text-white flex flex-row pt-10">

          <p className="px-10 basis-1/2">
          <span className="bold-16">Desenvolvimento de Aplicações:</span> Adquiri compreensão dos princípios de design de software, arquitetura de software.
          </p>

          <p className="px-10 basis-1/2">
          <span className="bold-16">Programação de Computadores:</span> Desenvolvi habilidades em várias linguagens de programação, como C#, PHP, Javascript, entre outras. Pude aprender a escrever, depurar e manter código de maneira eficiente.

          </p>
        </div>

        <div className="text-white flex flex-row pt-10">

          <p className="px-10 basis-1/2">
          <span className="bold-16">Comunicação e Trabalho em Equipe: </span>Desenvolvi habilidades interpessoais, aprimorando minha capacidade de comunicação eficaz e colaboração em equipes de desenvolvimento.
          </p>

          <p className="px-10 basis-1/2">
          <span className="bold-16">Desenvolvimento Web:</span> Introdução ao desenvolvimento web, incluindo HTML, CSS, JavaScript e frameworks web populares (React, React Native e Bootstrap).

          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero