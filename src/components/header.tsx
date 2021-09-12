import { Heading, HStack, Text, Link, Button } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<HStack
			justify="space-between"
			bg="#F1F1F1"
			px="50px"
			py="10px"
			as="header"
		>
			
			<HStack>
			<img src="/programming_simplified.svg" alt="logo" width="50px"/>
				<Heading>Programming Simplifed</Heading>
			</HStack>
			<HStack justify="center" align="center">
				<Link href="/home" passHref>
					<Button variant="contained" color="secondary">Home</Button>
				</Link>
				<Link href="/courses" passHref>
					<Button variant="contained" color="secondary">Courses</Button>
				</Link>
				<Link href="/faq" passHref>
					<Button variant="contained" color="secondary">FAQ</Button>
				</Link>
				<Link href="/socials" passHref>
					<Button variant="contained" color="secondary">Socials</Button>
				</Link>
			</HStack>
		</HStack>
	);
}
