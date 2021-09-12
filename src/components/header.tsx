import { Heading, HStack, Link, Button } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Container
			bg="brand.header.bg"
			w="100%"	
		>
			<ContainerInside>
				<HStack
					justify="space-between"
					bg="brand.header.bg"
					px="50px"
					py="20px"
					as="header"
				>
					<HStack>
						<img src="/programming_simplified.svg" alt="logo" width="50px"/>
						<Heading color="brand.header.title">Programming Simplifed</Heading>
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
			</ContainerInside>
		</Container>
	);
}
