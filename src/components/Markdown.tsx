const MyH1: React.FC = (props) => <h1 className="text-3xl md:text-5xl mb-4 font-extrabold" {...props}></h1>

const MyH2: React.FC = (props) => <h1 className="text-2xl" {...props}></h1>

const MyH3: React.FC = (props) => <h1 className="text-2xl" {...props}></h1>

export const Components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
}
