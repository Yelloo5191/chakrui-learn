import { Box, Flex, Heading, Text, VStack, HStack, Link, Button } from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return (
		<VStack>
			<VStack justify="center" minH="600px">
				<HStack alignItems="right">
					<Heading><strong>Free Online Courses</strong> taught by <strong>real people</strong> where you can learn web and game development.</Heading>
				</HStack>
			</VStack>
			<VStack>
				<Heading>Learn coding, concept development, game dev fundamentals, and web design.</Heading>
				<Link href="/start" passHref>
					<Button bgColor="#1B9AAA" right="500px">
						Learn Now
					</Button>
				</Link>
			</VStack>
		</VStack>
	);
}
