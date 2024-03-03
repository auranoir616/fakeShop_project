import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemDescription,
  ItemContent,
  Item,
} from 'semantic-ui-react'

const TestimoniItem = () => (
  <ItemGroup className='w-1/2'>
    <p className='w-full h-16 font-extrabold text-center text-5xl'>TESTIMONIAL</p>
    <Item>
      <ItemImage size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>John</ItemHeader>
        <ItemMeta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </ItemMeta>
        <ItemDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique doloribus vel provident dolore alias nemo eos ex in optio modi eum magni fugit vitae officiis repellendus nam, excepturi dolorum.
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>Bucks Homebrew Stayaway</ItemHeader>
        <ItemMeta content='$1000 2 Weeks' />
        <ItemDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit maiores neque ducimus laboriosam itaque accusamus dolorum illo, nihil officiis facere? Aspernatur odit est nulla laborum rem totam amet ex?
        </ItemDescription>
      </ItemContent>
    </Item>
    <Item>
      <ItemImage size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>Bucks Homebrew Stayaway</ItemHeader>
        <ItemMeta content='$1000 2 Weeks' />
        <ItemDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit maiores neque ducimus laboriosam itaque accusamus dolorum illo, nihil officiis facere? Aspernatur odit est nulla laborum rem totam amet ex?
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>Bucks Homebrew Stayaway</ItemHeader>
        <ItemMeta content='$1000 2 Weeks' />
        <ItemDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit maiores neque ducimus laboriosam itaque accusamus dolorum illo, nihil officiis facere? Aspernatur odit est nulla laborum rem totam amet ex?
        </ItemDescription>
      </ItemContent>
    </Item>



  </ItemGroup>
)

export default TestimoniItem