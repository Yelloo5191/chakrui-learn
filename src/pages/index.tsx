import { Box, Text, VStack, HStack, Link, Button } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Home(): JSX.Element {
	return (
		<>
			<Container bg="rgb(125,214,246,25%)">
				<ContainerInside>
					<HStack>
						<VStack
							px="50px"
						>
							<img src="/code_thinking.svg" alt="code thinking" width="1000px"/>
						</VStack>
						<VStack>
							<VStack justify="center" minH="600px">
								<HStack alignItems="right">
									<Text fontSize="40px" textAlign="center"><strong>Free Online Courses</strong> taught by <strong>Professionals</strong></Text>
								</HStack>
								<Text pt="10px" fontSize="20px" textAlign="center">Learn <strong>coding, concept development, game dev fundamentals, and web design.</strong></Text>
								<Container pt="40px">
									<Link style={{ textDecoration: 'none' }} href="/start" passHref>
										<Button fontSize="30px" _hover={{ w:"350px" }} _focus={{ boxShadow: "outline" }} bg="#7DD6F6" w="400px" h="75px" borderRadius="50px" transition=".2s ease-in-out">
											Learn Now
										</Button>
									</Link>
								</Container>
							</VStack>
						</VStack>
					</HStack>
					<VStack>
						<Text fontSize="55px" textAlign="center">Join a large community of over <strong>1000</strong> aspiring developers!</Text>
						<Text pt={100} fontSize="30px" textAlign="center">About our courses</Text>
					</VStack>
				</ContainerInside>
			</Container>
			<Box bg="#ffffff" w="100%" h="15px">
			</Box>
			<Container bg="rgb(241,241,241)">
				<VStack mb="25px">
					<HStack my="25px">
						<Box minH="350px" maxW="500px" bg="brand.boxbg" borderWidth="1px" borderRadius="lg" overflow="hidden" mx="25px">
							<Box p="6">
								<Box d="flex" alignItems="baseline">
									<Box
										color="brand.text"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="20px"
										ml="2"
										w="100%"
										textAlign="center"
									>
										<Text><strong>Learn Web Development</strong></Text>
										<Text>Learn the basics of TypeScript, React, and Chakra UI to develop websites! Creating your own websites from scratch is a useful skill that can help foster creativity, help you understand code, and allow you to start your own personal projects. The course will also cover VSCode and GitHub, which are both used in professional settings.</Text>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box minH="350px" maxW="500px" bg="brand.boxbg" borderWidth="1px" borderRadius="lg" overflow="hidden" mx="25px">
							<Box p="6">
								<Box d="flex" alignItems="baseline">
									<Box
										color="brand.text"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="20px"
										ml="2"
										w="100%"
										textAlign="center"
									>
										<Text><strong>Learn Game Development</strong></Text>
										<Text>Learn the basics of Unity and programming in relation to game development. The fundamentals of game design/programming will give students an introduction to a variety of skills, including design, modeling, coding, and concept development.</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					</HStack>
					<HStack my="25px">
						<Box minH="350px" maxW="500px" bg="brand.boxbg" borderWidth="1px" borderRadius="lg" overflow="hidden" mx="25px">
							<Box p="6">
								<Box d="flex" alignItems="baseline">
									<Box
										color="brand.text"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="20px"
										ml="2"
										w="100%"
										textAlign="center"
									>
										<Text><strong>Learn Discord.js</strong></Text>
										<Text>Learn the basics of JavaScript, Discord API, and discord.js, a JavaScript library used for Discord bot development. With Discord bots being used in almost every server, knowledge of bot development will help students understand the utilities of bots and create their own! The course will also cover VSCode and GitHub, which are both used in professional settings.</Text>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box minH="350px" maxW="500px" bg="brand.boxbg" borderWidth="1px" borderRadius="lg" overflow="hidden" mx="25px">
							<Box p="6">
								<Box d="flex" alignItems="baseline">
									<Box
										color="brand.text"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="20px"
										ml="2"
										w="100%"
										textAlign="center"
									>
										<Text><strong>Learn Artificial Intelligence</strong></Text>
										<Text>This is an exciting training program filled with intuition tutorials, practical exercises and real-world case studies. You'll learn about AI neural networks, convolution neural networks, self-organizing maps, Boltzmann Machines, intuition behind AutoEncoders, recurrent neural networks, how to apply all these in practice, and much more!</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					</HStack>
				</VStack>
			</Container>
			<Box bg="#ffffff" w="100%" h="15px"></Box>
		</>
	);
}
