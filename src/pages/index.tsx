import { Text, VStack, HStack, Link, Button } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Home(): JSX.Element {
	return (
		<Container>
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
							<Text pt="40px" fontSize="20px" textAlign="center">Learn <strong>coding, concept development, game dev fundamentals, and web design.</strong></Text>
							<Link href="/start" passHref>
								<Button fontSize="30px" _hover={{ borderRadius:"50px" }} _focus={{ boxShadow: "outline" }} bgGradient="linear-gradient(180deg, rgba(125,214,246,1) 0%, rgba(121,126,246,1) 100%)" w="400px" h="100px" borderRadius="40px" transition=".2s ease-in-out">
									Learn Now
								</Button>
							</Link>
							<HStack>
								<Text>Join a large community of over <strong>100</strong> aspiring developers!</Text>
							</HStack>
						</VStack>
					</VStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
