const QuoteBlock = ({ quote }: { quote: string }) => {
    return (
        <p className="text-xl md:text-2xl leading-relaxed text-green-700 font-serif italic mb-8">
            &ldquo;{quote}&rdquo;
        </p>
    )
}

export default QuoteBlock