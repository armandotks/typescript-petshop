import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div
                        data-aos="fade-up-right"
                        data-aos-delay="300"
                        className="relative"
                    >
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="foto de um gato e um cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Img}
                                alt="foto de um gato"
                                fill
                                quality={100}
                                priority
                            />
                        </div>

                    </div>

                    <div
                        data-aos="fade-up-right"
                        data-aos-delay="300"
                        className="space-y-6 mt-10"
                    >
                        <h2 className="text-4xl font-bold">Sobre</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus sit vitae quibusdam aliquam tempore voluptatem ducimus eius deleniti? Beatae sunt adipisci velit veniam aspernatur provident eius eligendi impedit quos.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinarios.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade!
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a
                                target='_blank'
                                href={'https://wa.me/5522992618132?text=Olá vim pelo site e gostaria de mais informações.'}
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via whatsapp
                            </a>

                            <a
                                href="#"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da loja
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}